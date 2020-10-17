import React, { Component } from 'react'

class HomeSideExpansion extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="accordion" id="accordionExample">
            <div class="card bg-light">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                    <button class="btn btn-outline-dark button_collapse" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Style 
                    </button>
                    </h2>
                </div>
          
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body px-0">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="traditional"/>
                                    <label class="form-check-label" for="traditional">
                                        Traditional <span class="badge badge-info badge-pill">14</span>
                                    </label>
                                </div> 
                            </li>
                            <li class="list-group-item">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="modern"/>
                                    <label class="form-check-label" for="modern">
                                        Modern <span class="badge badge-info badge-pill">89</span>
                                    </label>
                                </div> 
                             </li>
                            <li class="list-group-item">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="contemporary"/>
                                    <label class="form-check-label" for="contemporary">
                                        Contemporary <span class="badge badge-info badge-pill">45</span>
                                    </label>
                                </div> 
                            </li>
                            <li class="list-group-item">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="sustainable"/>
                                    <label class="form-check-label" for="sustainable">
                                        Sustainable <span class="badge badge-info badge-pill">22</span>
                                    </label>
                                </div> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card bg-light">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                    <button class="btn btn-outline-dark button_collapse" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                        Category
                    </button>
                    </h2>
                </div>
                <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body px-0">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="single"/>
                                    <label class="form-check-label" for="single">
                                        Single Storey <span class="badge badge-info badge-pill">14</span>
                                    </label>
                                </div> 
                            </li>
                            <li class="list-group-item">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="two"/>
                                    <label class="form-check-label" for="two">
                                        Two Storey <span class="badge badge-info badge-pill">89</span>
                                    </label>
                                </div> 
                            </li>
                            <li class="list-group-item">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="three"/>
                                    <label class="form-check-label" for="three">
                                        Three Storey <span class="badge badge-info badge-pill">45</span>
                                    </label>
                                </div> 
                            </li>
                            <li class="list-group-item">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="more"/>
                                    <label class="form-check-label" for="more">
                                        More Storey <span class="badge badge-info badge-pill">22</span>
                                    </label>
                                </div> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card bg-light">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                    <button class="btn btn-outline-dark button_collapse" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                        Floor Area
                    </button>
                    </h2>
                </div>
                <div id="collapseThree" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body px-0">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="smallest"/>
                                    <label class="form-check-label" for="smallest">
                                        &#8804;1000 sqrt <span class="badge badge-info badge-pill">14</span>
                                    </label>
                                </div> 
                            </li>
                            <li class="list-group-item">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="small"/>
                                    <label class="form-check-label" for="small">
                                        1000 sqrt - 2000 sqrt <span class="badge badge-info badge-pill">89</span>
                                    </label>
                                </div> 
                            </li>
                            <li class="list-group-item">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="middle"/>
                                    <label class="form-check-label" for="middle">
                                        2000 sqrt - 3000 sqrt <span class="badge badge-info badge-pill">45</span>
                                    </label>
                                </div> 
                            </li>
                            <li class="list-group-item">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="large"/>
                                    <label class="form-check-label" for="large">
                                        3000 sqrt - 4000 sqrt <span class="badge badge-info badge-pill">22</span>
                                    </label>
                                </div> 
                            </li>
                            <li class="list-group-item">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="largest"/>
                                    <label class="form-check-label" for="largest">
                                        &#8805;4000 sqrt <span class="badge badge-info badge-pill">22</span>
                                    </label>
                                </div> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card bg-light">
            <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                <button class="btn btn-outline-dark button_collapse" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                Materials
                </button>
                </h2>
            </div>
            <div id="collapseFour" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body px-0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="brick"/>
                                <label class="form-check-label" for="brick">
                                Brick <span class="badge badge-info badge-pill">14</span>
                                  </label>
                            </div> 
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="concrete"/>
                                  <label class="form-check-label" for="concrete">
                                  Concrete <span class="badge badge-info badge-pill">89</span>
                                  </label>
                            </div> 
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="stone"/>
                                <label class="form-check-label" for="stone">
                                Stone <span class="badge badge-info badge-pill">45</span>
                                </label>
                            </div> 
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="glass"/>
                                <label class="form-check-label" for="glass">
                                Glass <span class="badge badge-info badge-pill">22</span>
                                </label>
                            </div> 
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="steel"/>
                                <label class="form-check-label" for="steel">
                                Steel <span class="badge badge-info badge-pill">22</span>
                                </label>
                            </div> 
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="wood"/>
                                <label class="form-check-label" for="wood">
                                Wood <span class="badge badge-info badge-pill">22</span>
                                </label>
                            </div> 
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="bamboo"/>
                                <label class="form-check-label" for="bamboo">
                                Bamboo <span class="badge badge-info badge-pill">22</span>
                                </label>
                            </div> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card bg-light">
            <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                <button class="btn btn-outline-dark button_collapse" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseOne">
                Rooms
                </button>
                </h2>
            </div>
            <div id="collapseFive" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body px-0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="bed1"/>
                                <label class="form-check-label" for="bed1">
                                One Room <span class="badge badge-info badge-pill">14</span>
                                  </label>
                            </div> 
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="bed2"/>
                                  <label class="form-check-label" for="bed2">
                                  Two Rooms <span class="badge badge-info badge-pill">89</span>
                                  </label>
                            </div> 
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="bed3"/>
                                <label class="form-check-label" for="bed3">
                                Three Rooms<span class="badge badge-info badge-pill">45</span>
                                </label>
                            </div> 
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="bed4"/>
                                <label class="form-check-label" for="bed4">
                                Four Rooms <span class="badge badge-info badge-pill">22</span>
                                </label>
                            </div> 
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="bed5"/>
                                <label class="form-check-label" for="bed5">
                                &#8805;Five Rooms <span class="badge badge-info badge-pill">22</span>
                                </label>
                            </div> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card bg-light">
            <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                <button class="btn btn-outline-dark button_collapse" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseOne">
                Bath Rooms
                </button>
                </h2>
            </div>
            <div id="collapseSix" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body px-0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="bath1"/>
                                <label class="form-check-label" for="bath1">
                                One Bath Room <span class="badge badge-info badge-pill">14</span>
                                  </label>
                            </div> 
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="bath2"/>
                                  <label class="form-check-label" for="bath2">
                                  Two Bath Rooms <span class="badge badge-info badge-pill">89</span>
                                  </label>
                            </div> 
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="bath3"/>
                                <label class="form-check-label" for="bath3">
                                Three Bath Rooms<span class="badge badge-info badge-pill">45</span>
                                </label>
                            </div> 
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="bath4"/>
                                <label class="form-check-label" for="bath4">
                                    &#8805;Four Bed Rooms <span class="badge badge-info badge-pill">22</span>
                                </label>
                            </div> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

                
                
            </React.Fragment>
        )
    }
}

export default HomeSideExpansion