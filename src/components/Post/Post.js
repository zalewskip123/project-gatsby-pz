import React from "react";
import { graphql, useStaticQuery } from "gatsby"; //StaticQuery

/*
const Post = () => {
    return (
        <StaticQuery
            query={graphql`
                {
                    site {
                        siteMetadata {
                            description
                        }
                    }
                }
            `}
            render={({site: { siteMetadata: { description }}}) => (
                <p>{description} Hello Roman</p>
            )}
        />
    )
}
*/

const query = graphql`
    {
        site {
            siteMetadata {
                description
            }
        }
    }
`;

const Post = () => {
    const data = useStaticQuery(query);

    return <p>{data.site.siteMetadata.description}</p>
}

export default Post;