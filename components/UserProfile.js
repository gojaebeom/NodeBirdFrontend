import React, { useCallback } from 'react';
import { Button, Card, Avatar } from 'antd';

import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(()=>{
        dispatch(logoutAction())
    }, []);

    return(
        <Card
            actions={[
                <div key="twit">개시글<br/>0</div>,
                <div key="faoolwings">팔로잉<br/>0</div>,
                <div key="followers">팔로워<br/>0</div>
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>GO</Avatar>}
                title="gojaebeom"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile;