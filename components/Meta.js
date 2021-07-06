import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
                <meta name="keywords" content={keywords} />
                <title>{title}</title>
            
        </Head>
    )
}
Meta.defaultProps = {title: 'WebDev News',keywords: 'wen development, programming'}
export default Meta
