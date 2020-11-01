import React, {useMemo} from 'react';
import {Form, Input} from 'antd';

const nicknameEditForm = () => {
    
    //style 컴포넌트 대신 useMemo로 컴포넌트 최적화 사용해보기 
    const style = useMemo(()=>({
        marginBottom:'20px',
        border:'1px solid #d9d9d9',
        padding:'20px'
    }), []);

    return(
        <Form style={style}>
            <Input.Search addonBefore="닉네임" enterButton="수정"/>
        </Form>
    )
};

export default nicknameEditForm;