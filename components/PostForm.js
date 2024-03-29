import React, { useCallback, useRef, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../reducers/post';

const PostForm = () => {
    const { imagePaths } = useSelector(state=>state.post);
    const dispatch = useDispatch();
    const imageInput = useRef();
    const [text, setText] = useState('');
    const onChangeText = useCallback((e)=>{
        setText(e.target.value);
    }, []);
    const onSubmit = useCallback(()=>{
        dispatch(addPost);
        setText('');
    }, []);
    const onClickImageUpload = useCallback((e)=>{
        imageInput.current.click();
    }, [imageInput.current]);
    return (
        <Form 
            style={{ margin: '10px 0 20px'}}
            encType="multipart/form-data"
            onFinish={onSubmit}
        >
            <Input.TextArea value={text}  
                onChange={onChangeText}
                maxLengh={140}
                placeholder="dummy data"
            />
            <div>
                <input type="file" multiple hidden ref={imageInput}/>
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button 
                    type="primary" 
                    style={{float:'right'}}
                    htmlType="submit"
                >
                    업로드
                </Button>
            </div>
            <div>
                {imagePaths.map((v)=>(
                    <div key={v} style={{display:'inline-block'}}>
                        <img src={y} style={{width:'200px'}} alt={y} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    )
};

export default PostForm;