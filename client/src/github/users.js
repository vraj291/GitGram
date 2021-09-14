import octokit from '../config/github_config'

export const getUser = async (username) => {
    let response = await octokit.graphql(`
        query($login : String!){
            user(login : $login){
                name
                avatarUrl
                bio
                company
                email
                repositories{
                    totalCount
                }
                status{
                    message
                }
                followers{
                    totalCount
                }
                following{
                    totalCount
                }
                location
                url
            }
        }
    `,{
        login : username
    })
    return response.user
}

export const getRepositories = async (username,after) => {
    let response = await octokit.graphql(`
        query($login : String!, $after : String){
            user(login : $login){
                repositories(first : 10,after : $after){
                    edges{
                        cursor
                        node{
                            createdAt
                            description
                            forkCount
                            stargazerCount
                            homepageUrl
                            name
                        }
                    }
                    pageInfo{
                        endCursor
                        hasNextPage
                    }
                }
            }
        }
    `,{
        login : username,
        after,
    })
    return response.user.repositories
}

export const getFollowers = async (username,after) => {
    let response = await octokit.graphql(`
        query($login : String!, $after : String){
            user(login : $login){
                followers(first : 10,after : $after){
                    edges{
                        cursor
                        node{
                            name
                            avatarUrl
                            login
                        }
                    }
                    pageInfo{
                        endCursor
                        hasNextPage
                    }
                }
            }
        }
    `,{
        login : username,
        after
    })
    return response.user.followers
}

export const getFollowing = async (username,after) => {
    let response = await octokit.graphql(`
        query($login : String!, $after : String){
            user(login : $login){
                following(first : 10,after : $after){
                    edges{
                        cursor
                        node{
                            name
                            avatarUrl
                            login
                        }
                    }
                    pageInfo{
                        endCursor
                        hasNextPage
                    }
                }
            }
        }
    `,{
        login : username,
        after
    })
    return response.user.following
}
