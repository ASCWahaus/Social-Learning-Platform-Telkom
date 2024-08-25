import React, {useState, useEffect} from "react"
import useStyles from './formstyle'
import "./formstyle.css"
import FileBase from 'react-file-base64'
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector} from 'react-redux';
import { createPost, updatePost } from "../../actions/posts";
import joi from 'joi';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CustomInput, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';
import Select from 'react-select';


const Form = ({currentId, setCurrentId}) => {
    const aquaticCreatures = [
        { label: 'Digital Technology, Data & Platform', value: 'Digital Technology, Data & Platform' },
        { label: 'Digital Network & Connectivity', value: 'Digital Network & Connectivity' },
        { label: 'Digital Transformation', value: 'Digital Transformation' },
        { label: 'Design & Digital Content', value: 'Design & Digital Content' },
        { label: 'Governance, Risk, & Compliance', value: 'Governance, Risk, & Compliance' },
        { label: 'Financial and Investment', value: 'Financial and Investment' },
        { label: 'Business and Management', value: 'Business and Management' },
        { label: 'Personal Development', value: 'Personal Development' },
        { label: 'Digital Marketing', value: 'Digital Marketing' },
        { label: 'Sales & Customer Service', value: 'Sales & Customer Service' },
        { label: 'Human Capital Development', value: 'Human Capital Development' },
        { label: 'Software Development', value: 'Software Development' },
        { label: 'Digital Product Management', value: 'Digital Product Management' },
        { label: 'Artificial Intelligence', value: 'Artificial Intelligence' },
        { label: 'Cloud Computing', value: 'Cloud Computing' },
        { label: 'Leadership', value: 'Leadership' },
        { label: 'Corporate Entrepreneurship', value: 'Corporate Entrepreneurship' },
        { label: 'Office Productivity', value: 'Office Productivity' },
        { label: 'Data Science', value: 'Data Science' },
        { label: 'Internet of Things', value: 'Internet of Things' },
      ];
    
    const [postData, setPostData] = useState({
        title : '',
        description : '',
        type : '',
        categories : '',
        url : '',
        user_id : '',
        thumbnail : ''
    })

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)

    useEffect(() =>{
        if(post) setPostData(post)
    }, [post])

    const dispatch = useDispatch();

    const classes = useStyles();

    const handleSubmit = (e) => {
        try {
            e.preventDefault(); //menghindari refresh dari browser

            if(currentId){
                dispatch(updatePost(currentId, postData));
                toast.success('Data succesfully updated', { position: "bottom-right", autoClose: 3000, theme: "colored" });
            } else {
                dispatch(createPost(postData));
                toast.success('Data succesfully added', { position: "bottom-right", autoClose: 3000, theme: "colored" });
            }

            clear()
           
        } catch (error) {
            // toast.error('Whopss.. something went wrong!!', { position: "bottom-right", autoClose: 3000, theme: "colored" });
        }
        
    }

    const clear = () => {
        setCurrentId(0)
        setPostData({
            title : '',
            description : '',
            type : '',
            categories : '',
            url : '',
            user_id : '',
            thumbnail : ''
        })
    }

    return (
        <>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                
                <TextField name="type" variant="outlined" label="Type" fullWidth value={postData.type} onChange={(e) => setPostData({...postData, type: e.target.value})}/>
                 <TextField name="user_id" variant="outlined" label="User Id" fullWidth value={postData.user_id} onChange={(e) => setPostData({...postData, user_id: e.target.value})}/>

                <FormGroup>
                                <p style={{fontSize:"10px"}}>*required field</p>
								<p>Title*</p>
                                <Input name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}  />
                        </FormGroup>
                        <FormGroup>
								 <p>Description*</p>
                                <Input type="textarea" name="description" variant="outlined" label="Description" fullWidth value={postData.description} onChange={(e) => setPostData({...postData, description: e.target.value})} />
                        </FormGroup>
                        <FormGroup>
								<p>Link*</p>
                <Input name="url" variant="outlined" label="Url" fullWidth value={postData.url} onChange={(e) => setPostData({...postData, url: e.target.value})}  />
                        </FormGroup>
                        


                        <TextField name="categories" variant="outlined" label="Categories" fullWidth value={postData.categories} onChange={(e) => setPostData({...postData, categories: e.target.value.split(',')})}/>
                        <FormGroup>
								<p>Thumbnail</p>
                                <div className={classes.fileInput}>
                  <FileBase type= "file" multiple = {false} onDone = {({base64})=> setPostData({...postData, thumbnail: base64})}/>
                </div>
                        </FormGroup>





                

                <Button className = {classes.buttonSubmit} variant = "contained" color= "primary" size="large" type="submit" fullWidth>Submit</Button>
                <ToastContainer />
            </form>
            
        

        </>
    );
}

export default Form;