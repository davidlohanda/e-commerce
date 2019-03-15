import React from 'react'
import Axios from 'axios';
import { urlApi } from '../support/urlApi';
import {connect} from 'react-redux'

class ProductDetail extends React.Component{
    state={product : {}}
    
    componentDidMount(){
        this.getDataApi()
    }

    getDataApi = () => {
        var idUrl = this.props.match.params.id
        Axios.get(urlApi+'/products/'+idUrl)
        .then((res)=>{
            this.setState({product : res.data}) 
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    renderButton=()=>{
        if(this.props.username!==''){
            return <div><input className='btn btn-danger  border-secondary form-control col-md-4' value='Add To Wishlist'/>
            <input className='btn btn-primary  border-secondary form-control col-md-4' value='Beli Sekarang'/>
            <input className='btn btn-success  border-secondary form-control col-md-4' value='Masukan Keranjang'/></div>
        }else{
            return <div><input className='btn btn-danger  border-secondary form-control col-md-4' value='Add To Wishlist' disabled/>
            <input className='btn btn-primary  border-secondary form-control col-md-4' value='Beli Sekarang' disabled/>
            <input className='btn btn-success  border-secondary form-control col-md-4' value='Masukan Keranjang' disabled/></div>
        }
    }

    numProt=()=>{
        var num=this.refs.num.value
        if(num < 1){
            this.refs.num.value=1
        }
    }
    
    render(){
        var {nama,img,discount,deskripsi,harga} = this.state.product
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" style={{width: '100%'}}>
                            <img src={img} className="card-img-top" alt="..." />
                        </div>
                    </div>

                    <div className="col-md-8">
                        <h1 style={{color:'#4c4c4c'}}>{nama}</h1>
                        <div style={{display:'inline-block', backgroundColor:'#D50000', width:'50px',height:'22px', color:'white', textAlign:'center'}}>
                            {discount}%  
                        </div>
                        <span style={{fontSize:'12px', fontWeight:600, color:'#606060', marginLeft:'10px', textDecoration:'line-through'}}>{harga}</span>
                        <div style={{fontSize:'24px', fontWeight:700, color:'#ff5722', marginTop:'20px'}}>
                            {(1-discount/100)* harga}
                        </div>
                        <div className="row">
                            <div className='col-md-2'>
                                <div style={{marginTop:'15px', color:'#606060', fontWeight:700, fontSize:'14px'}}>
                                    Jumlah
                                </div>
                                <input ref='num' onChange={this.numProt} type='number' min={1} className='form-control' style={{width:'60px', marginTop:'10px'}}/>
                            </div>
                            <div className='col-md-6'>
                                <div style={{marginTop:'15px', color:'#606060', fontWeight:700, fontSize:'14px'}}>
                                    Catatan Untuk Penjual (Opsional)
                                </div>
                                <input placeholder='Contoh warna putih, ukuran XL, edisi ke 2' type='text' className='form-control' style={{marginTop:'13px'}}/>
                            </div>
                        </div>

                        <div className='row mt-4'>
                            <div className='col-md-8' style={{color:'#606060', fontStyle:'italic'}}>          
                                <p>
                                {deskripsi}
                                </p>
                            </div>
                        </div>
                        
                        <div className='row mt-4'>
                            {this.renderButton()}
                            {/* Pakai if ternary
                                {   this.props.username===""?
                                    <div className='row mt-4'>
                                        <input className='btn btn-danger  border-secondary form-control col-md-4' value='Add To Wishlist'/>
                                        <input className='btn btn-primary  border-secondary form-control col-md-4' value='Beli Sekarang'/>
                                        <input className='btn btn-success  border-secondary form-control col-md-4' value='Masukan Keranjang'/>            
                                    </div>
                                    :
                                    <div className='row mt-4'>
                                        <input disabled className='btn btn-danger  border-secondary form-control col-md-4' value='Add To Wishlist'/>
                                        <input disabled className='btn btn-primary  border-secondary form-control col-md-4' value='Beli Sekarang'/>
                                        <input disabled className='btn btn-success  border-secondary form-control col-md-4' value='Masukan Keranjang'/>            
                                    </div>
                                }
                            
                            */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        username:state.user.username
    }
}

export default connect(mapStateToProps)(ProductDetail)