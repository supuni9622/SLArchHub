import React, { Component } from 'react'

class ButtonsGroup extends Component {
    render() {
        return (
            <React.Fragment>
                <button type="button" class="btn btn-outline-dark mr-2" id="list" onclick="listView()"><i class="fa fa-bars"></i> List</button>
              <button type="button" class="btn btn-outline-dark mr-2" id="grid" onclick="gridView()"><i class="fa fa-th-large"></i> Grid</button>
              <button type="button" class="btn btn-outline-dark mr-2">Best Rated</button>
              <button type="button" class="btn btn-outline-dark mr-2">Latest</button>
              <button type="button" class="btn btn-outline-dark mr-2">Price <i class="fas fa-long-arrow-alt-down"></i></button>
            </React.Fragment>
        )
    }
}

export default ButtonsGroup
