import React from "react"
import { Link } from "gatsby"

import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';

const BlogListSingle = (props) => {
    const node = props.node
    const title = node.frontmatter.title || node.fields.slug
    return (
        <Columns.Column size="half" >
            <Content style={{
                background: '#ffffff url("https://picsum.photos/400/300") no-repeat center center',
                backgroundSize: 'cover'
            }}>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                </Link>
                <p
                    dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                    }}
                />
                <small><time>{node.frontmatter.date}</time></small>
            </Content>
        </Columns.Column>
    )
}

export default BlogListSingle
