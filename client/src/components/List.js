import React, { useEffect, useState } from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import { getUser,getFollowers } from '../github/users';

const data = [
    'hello',
    'from',
    'the',
    'other',
    'side'
]

export const List = () => {

    const [resp,setResp] = useState("")

    useEffect(async () => {
        let res = await getUser("ndan11")
        setResp(res)
    },[])

    return(
        <>
            {/* <FlatList
                data={data}
                renderItem={({item,index}) => <Text key={index}>{item}</Text>}
                ListHeaderComponent = {<Text>Header</Text>}
                ListFooterComponent = {<Text>Footer</Text>}
                ItemSeparatorComponent={(index) => (
                      <View
                        key={index}
                        style={{
                            height : 50,
                            backgroundColor : 'red'
                        }}
                      />
                    )
                  }
            /> */}
            <Text>
                {resp}
            </Text>
        </>
    )
}

const styles = StyleSheet.create({

})