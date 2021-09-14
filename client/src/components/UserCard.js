import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {StyleSheet, FlatList, Text, View, Image, ImageBackgroundBase} from 'react-native';
import { getFollowers, getRepositories, getUser } from '../github/users';

export const UserCard = ({username}) => {

    const [data,setData] = useState(null)

    useEffect(() => {
        
        const getData = async() => {
            let resp = await getUser(username)
            console.log(`${resp.avatarUrl}.png`)
            setData(resp)
        }
        
        getData()

        return () => {
            console.log("Unmounted.")
        }
    },[])

    if(data == null){
        return(
            <>
                <Text>Loading...</Text>
            </>
        )
    }else{
        return( 
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.avatar}
                        source={{
                            headers: {
                                "Content-Security-Policy" : `img-src *;**style-src 'self' 'unsafe-inline'; media-src *;**script-src 'self' http://onlineerp.solution.quebec 'unsafe-inline' 'unsafe-eval';** `
                            },
                            uri: `${data.avatarUrl}.png`
                        }}
                    />
                    <Text>{username}</Text>
                    <Text>{data.status.message}</Text>
                    <Text>{data.name}</Text>
                </View>
                <Text>{data.url}</Text>
                <Text>{data.bio}</Text>
                <Text>{data.company}</Text>
                <Text>{data.location}</Text>
                <Text>{data.email}</Text>
                <Text>{data.followers.totalCount}</Text>
                <Text>{data.following.totalCount}</Text>
                <Text>{data.repositories.totalCount}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    avatar : {
        height : 100,
        width: 100,
        borderRadius: 50
    },
    container:{
        color: 'white'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap'
    }
})