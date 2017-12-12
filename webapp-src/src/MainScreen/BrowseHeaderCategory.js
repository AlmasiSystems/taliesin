import React, { Component } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import BreadCrumbMenuCategory from './BreadCrumbMenuCategory';
//import StateStore from '../lib/StateStore';

class BrowseHeaderCategory extends Component {	
  constructor(props) {
    super(props);
    
    this.state = {
			dataSource: props.dataSource, 
			category: props.category, 
			categoryValue: props.categoryValue, 
			subCategory: props.subCategory, 
			subCategoryValue: props.subCategoryValue, 
			imgThumbBlob: false
		};
    
    this.loadCover = this.loadCover.bind(this);
    
    this.loadCover();
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
			dataSource: nextProps.dataSource, 
			category: nextProps.category, 
			categoryValue: nextProps.categoryValue, 
			subCategory: nextProps.subCategory, 
			subCategoryValue: nextProps.subCategoryValue, 
			imgThumbBlob: false
		}, () => {
      this.loadCover();
    });
  }
  
  loadCover() {
    /*StateStore.getState().APIManager.taliesinApiRequest("GET", "/data_source/" + encodeURIComponent(this.state.dataSource) + "/browse/path/" + encodeURI(this.state.path).replace(/#/g, "%23").replace(/\+/g, "%2B") + "?cover&thumbnail&base64")
    .then((result) => {
      this.setState({imgThumbBlob: result});
    })
    .fail(() => {
      this.setState({imgThumbBlob: false});
    });*/
  }
  
  render () {
    if (this.state.imgThumbBlob) {
      return (
        <Row>
          <Col md={9} sm={9} xs={8}>
            <BreadCrumbMenuCategory dataSource={this.state.dataSource} category={this.state.category} categoryValue={this.state.categoryValue} subCategory={this.state.subCategory} subCategoryValue={this.state.subCategoryValue} />
          </Col>
          <Col md={3} sm={3} xs={4} className="text-right">
            <Image src={"data:image/jpeg;base64," + this.state.imgThumbBlob} thumbnail responsive />
          </Col>
        </Row>
      );
    } else {
      return (
        <Row>
          <Col md={12} sm={12} xs={12}>
            <BreadCrumbMenuCategory dataSource={this.state.dataSource} category={this.state.category} categoryValue={this.state.categoryValue} subCategory={this.state.subCategory} subCategoryValue={this.state.subCategoryValue} />
          </Col>
        </Row>
      );
    }
  }
}

export default BrowseHeaderCategory;
