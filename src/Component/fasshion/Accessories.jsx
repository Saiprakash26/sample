import React from 'react'
import './Fashion.css'
import ione from './bag.jpeg'
import itwo from './wallet.jpeg'
import ithree from './bracelets.jpeg'
import ifour from './caps.jpeg'
import ifive from './combo accessories.jpeg'
import isix from './watch.jpeg'

export default function Accessories() {
    return (
        <div>
            <div className="card mb-3 p-5 container mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ione} className="img-fluid rounded-start" alt="Salwar" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body w-100">
                            <h5 className="card-title">Bag</h5>
                            <h4 className="card-text">25 % Offer</h4>
                            <h4 className="card-text"><small className="text-body-dark">Orginal Price: <del>1500</del> BF Price :1125</small></h4>
                            <h6 className="card-text">Avaliable Size</h6>

                        </div>
                        <div class="btn-group justify-content-center mx-md-3" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">M</button>
                            <button type="button" class="btn btn-outline-primary">S</button>
                            <button type="button" class="btn btn-outline-primary">L</button>
                            <button type="button" class="btn btn-outline-primary">XL</button>

                        </div>
                        <div className='Label d-flex ms-3 mt-5'>
                            <button className='text-center  border border-light' style={{ width: '30px', height: '30px' }}>-</button>
                            <label htmlFor="add to card"><h6 className='text-center ms-2 mt-1'>0</h6></label>
                            <button className='ms-2 border border-light' style={{ width: '30px', height: '30px' }}>+</button>
                        </div>
                        <div className='buto'>
                            <button className='bbone mt-3 ms-3 btn btn-success border border-none rounded-3 text-light' style={{ width: '150px', height: '40px' }}>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 p-5 container mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={isix} className="img-fluid rounded-start" alt=" Tri Color Chudidar" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body w-100">
                            <h5 className="card-title">Combo Accessories</h5>
                            <h4 className="card-text">30 % Offer</h4>
                            <h4 className="card-text"><small className="text-body-dark">Orginal Price: <del>1500</del> BF Price :1050</small></h4>
                            <h6 className="card-text">Avaliable Size</h6>

                        </div>
                        <div class="btn-group justify-content-center mx-md-3" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">M</button>
                            <button type="button" class="btn btn-outline-primary">S</button>
                            <button type="button" class="btn btn-outline-primary">L</button>
                            <button type="button" class="btn btn-outline-primary">XL</button>

                        </div>
                        <div className='Label d-flex ms-3 mt-5'>
                            <button className='text-center  border border-light' style={{ width: '30px', height: '30px' }}>-</button>
                            <label htmlFor="add to card"><h6 className='text-center ms-2 mt-1'>0</h6></label>
                            <button className='ms-2 border border-light' style={{ width: '30px', height: '30px' }}>+</button>
                        </div>
                        <div className='buto'>
                            <button className='bbone mt-3 ms-3 btn btn-success border border-none rounded-3 text-light' style={{ width: '150px', height: '40px' }}>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 p-5 container mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={itwo} className="img-fluid rounded-start" alt="Apron Top" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body w-100">
                            <h5 className="card-title">Wallets</h5>
                            <h4 className="card-text">25 % Offer</h4>
                            <h4 className="card-text"><small className="text-body-dark">Orginal Price: <del>1500</del> BF Price :1125</small></h4>
                            <h6 className="card-text">Avaliable Size</h6>

                        </div>
                        <div class="btn-group justify-content-center mx-md-3" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">M</button>
                            <button type="button" class="btn btn-outline-primary">S</button>
                            <button type="button" class="btn btn-outline-primary">L</button>
                            <button type="button" class="btn btn-outline-primary">XL</button>

                        </div>
                        <div className='Label d-flex ms-3 mt-5'>
                            <button className='text-center  border border-light' style={{ width: '30px', height: '30px' }}>-</button>
                            <label htmlFor="add to card"><h6 className='text-center ms-2 mt-1'>0</h6></label>
                            <button className='ms-2 border border-light' style={{ width: '30px', height: '30px' }}>+</button>
                        </div>
                        <div className='buto'>
                            <button className='bbone mt-3 ms-3 btn btn-success border border-none rounded-3 text-light' style={{ width: '150px', height: '40px' }}>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 p-5 container mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ithree} className="img-fluid rounded-start" alt="Causual Kurta's" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body w-100">
                            <h5 className="card-title">Bracelets</h5>
                            <h4 className="card-text">30 % Offer</h4>
                            <h4 className="card-text"><small className="text-body-dark">Orginal Price: <del>1500</del> BF Price :1050</small></h4>
                            <h6 className="card-text">Avaliable Size</h6>

                        </div>
                        <div class="btn-group justify-content-center mx-md-3" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">M</button>
                            <button type="button" class="btn btn-outline-primary">S</button>
                            <button type="button" class="btn btn-outline-primary">L</button>
                            <button type="button" class="btn btn-outline-primary">XL</button>

                        </div>
                        <div className='Label d-flex ms-3 mt-5'>
                            <button className='text-center  border border-light' style={{ width: '30px', height: '30px' }}>-</button>
                            <label htmlFor="add to card"><h6 className='text-center ms-2 mt-1'>0</h6></label>
                            <button className='ms-2 border border-light' style={{ width: '30px', height: '30px' }}>+</button>
                        </div>
                        <div className='buto'>
                            <button className='bbone mt-3 ms-3 btn btn-success border border-none rounded-3 text-light' style={{ width: '150px', height: '40px' }}>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 p-5 container mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ifour} className="img-fluid rounded-start" alt="Stacker Dress" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body w-100">
                            <h5 className="card-title">Caps</h5>
                            <h4 className="card-text">25 % Offer</h4>
                            <h4 className="card-text"><small className="text-body-dark">Orginal Price: <del>1500</del> BF Price :1125</small></h4>
                            <h6 className="card-text">Avaliable Size</h6>

                        </div>
                        <div class="btn-group justify-content-center mx-md-3" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">M</button>
                            <button type="button" class="btn btn-outline-primary">S</button>
                            <button type="button" class="btn btn-outline-primary">L</button>
                            <button type="button" class="btn btn-outline-primary">XL</button>

                        </div>
                        <div className='Label d-flex ms-3 mt-5'>
                            <button className='text-center  border border-light' style={{ width: '30px', height: '30px' }}>-</button>
                            <label htmlFor="add to card"><h6 className='text-center ms-2 mt-1'>0</h6></label>
                            <button className='ms-2 border border-light' style={{ width: '30px', height: '30px' }}>+</button>
                        </div>
                        <div className='buto'>
                            <button className='bbone mt-3 ms-3 btn btn-success border border-none rounded-3 text-light' style={{ width: '150px', height: '40px' }}>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 p-5 container mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ifive} className="img-fluid rounded-start" alt="Strapless Dress" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body w-100">
                            <h5 className="card-title">All Acessories</h5>
                            <h4 className="card-text">25 % Offer</h4>
                            <h4 className="card-text"><small className="text-body-dark">Orginal Price: <del>1000</del> BF Price :625</small></h4>
                            <h6 className="card-text">Avaliable Size</h6>

                        </div>
                        <div class="btn-group justify-content-center mx-md-3" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">M</button>
                            <button type="button" class="btn btn-outline-primary">S</button>
                            <button type="button" class="btn btn-outline-primary">L</button>
                            <button type="button" class="btn btn-outline-primary">XL</button>

                        </div>
                        <div className='Label d-flex ms-3 mt-5'>
                            <button className='text-center  border border-light' style={{ width: '30px', height: '30px' }}>-</button>
                            <label htmlFor="add to card"><h6 className='text-center ms-2 mt-1'>0</h6></label>
                            <button className='ms-2 border border-light' style={{ width: '30px', height: '30px' }}>+</button>
                        </div>
                        <div className='buto'>
                            <button className='bbone mt-3 ms-3 btn btn-success border border-none rounded-3 text-light' style={{ width: '150px', height: '40px' }}>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
