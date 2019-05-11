import React from "react";
import { Form, Input, Button } from "antd";
import Axios from 'axios';

const FormItem = Form.Item;


class CustomForm extends React.Component {
    
    //This is basically the submit event listener for form submit
    //Request type is an additional parameter that we have added to ensure we change form accordingly.
    //We are adding the form as a listener in a weird way as we need to pass additional parameters/ 

    handleFormSubmit = (event, requestType, articleID) =>{
      //event.preventDefault(); //prevents the form from being submitted directly. 
      const title = event.target.elements.title.value; //the name we give to form children is accessible
      const content = event.target.elements.content.value; //the name we give to form children is accessible
       
      switch(requestType){
        case 'post':
        //First parameter is url, second is data in json. 
            Axios.post('http://127.0.0.1:8000/api/', {
              title:title,
              content:content
            } 

            ).then(res =>{
              console.log(res)
            }).catch(err=>{
              console.log(err)
            });
            break;
        case 'put':
         //First parameter is url, second is data in json. 
            Axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
              title:title,
              content:content
            } 

            ).then(res =>{
              console.log(res)
            }).catch(err=>{
              console.log(err)
            });
            break;
      }
    }



    render() {
    return (
      <div>
        <Form onSubmit={(event) => this.handleFormSubmit(
        event,
        this.props.requestType,
        this.props.articleID
          )}>
          <FormItem label="Title">
            <Input name="title" placeholder="Put a title here" />
          </FormItem>
          <FormItem label="Content">
            <Input name="content" placeholder="Enter some content ..." />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
            {this.props.btnText}
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default CustomForm;