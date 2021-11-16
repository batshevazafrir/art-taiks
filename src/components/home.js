import { connect } from 'react-redux'
import actions from '../redux/actions'
import React, { useCallback, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { MDBCol, MDBIcon } from "mdbreact";
import Cropper from 'react-easy-crop';


function mapStateToProps(state) {
    //debugger
    return {
        Cards: state.reducerCards.Cards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCards: () => dispatch(actions.getCards()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(function GetCards(props) {
    const { Cards, getCards } = props
    const [dataArray, setDataArray] = useState()
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
      }, [])



    useEffect(() => {
        getCards()
    }, [])
    return (
        <>
            <h3>Gallery page</h3>
            <MDBCol md="6">
                <div className="input-group md-form form-sm form-1 " style={{ marginInline: '50%' }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text purple lighten-3" id="basic-text1">
                            <MDBIcon className="text-white" icon="search" />
                        </span>
                    </div>
                    <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" onChange={(e) => {

                        const filter_d = Cards.filter(card => {
                            return card.nameArt.toLowerCase().includes(e.target.value.toLowerCase())
                        })
                        setDataArray(filter_d)
                        console.log(dataArray);
                    }} />
                </div>
            </MDBCol>
            {dataArray &&
                dataArray.map((card, index) => (
                    <div key={index} class="col-xl-3 col-lg-4 col-md-6 mb-4" style={{ display: 'inline-flex', padding: '10vh' }}>
                        <div class="bg-white rounded shadow-sm">
                            <img src={card.image} alt="" class="img-fluid card-img-top" />
                            <div class="p-4">
                                <h5>
                                    <a href="#" class="text-dark">{card.nameArt}</a>
                                </h5>
                                <p class="small text-muted mb-0">{card.description}</p>
                                <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                    <p class="small mb-0">
                                        <i class="fa fa-picture-o mr-2"></i>
                                        <span class="font-weight-bold">JPG</span>
                                    </p>
                                    <div class="badge badge-danger px-3 rounded-pill font-weight-normal">New</div>
                                </div>
                            </div>
                        </div>
                    </div>



                    // <Card class="card" key={index} style={{ border: '10px', width: '20rem', height: '10rem', "color": "black", marginTop: '2vh', display: 'inline-flex', padding: '4vh', marginInline: '1vh' }}>
                    //     <img class="card-img-top" src={data.image} alt="Card image cap" />
                    //     <div class="card-body">
                    //         <h5 class="card-title">{data.nameArt}</h5>
                    //         <p class="card-text">{data.description}</p>
                    //     </div>
                    // </Card>
                ))}

            {
                !dataArray &&
                Cards.map((card, index) => {
                    debugger
                    return (
                        <div key={index} class="col-xl-3 col-lg-4 col-md-6 mb-4" style={{ display: 'inline-flex', padding: '10vh' }}>
                            <div class="bg-white rounded shadow-sm">
                                {/* <Cropper
                                    image={card.image}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={4 / 3}
                                    onCropChange={setCrop}
                                    onCropComplete={onCropComplete}
                                    onZoomChange={setZoom}
                                /> */}
                                <img src={card.image} alt="" class="img-fluid card-img-top" />
                                <div class="p-4">
                                    <h5>
                                        <a href="#" class="text-dark">{card.nameArt}</a>
                                    </h5>
                                    <p class="small text-muted mb-0">{card.description}</p>
                                    <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                        <p class="small mb-0">
                                            <i class="fa fa-picture-o mr-2"></i>
                                            <span class="font-weight-bold">JPG</span>
                                        </p>
                                        <div class="badge badge-danger px-3 rounded-pill font-weight-normal">New</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                })
            }

        </>
    )
})

