import styles from './Post.module.css';
import Link from 'next/link';
import { Blog } from '../../../interfaces/Blog';
import { useRouter } from 'next/router'

interface Props {
    blog: Blog
}

const Post : React.FC<Props> = ({blog}) => {
    const router = useRouter()
    return <div onClick={() => router.push(`/artiklar/${blog.name}`)} id={styles.Post}>
        <div id={styles.top}>
            <img
                src={blog.imgUrl}
            />
        </div>
        <div id={styles.content}> 
            <h3>{blog.name}</h3>
            <Link href={`/artiklar/${blog.name}`}>
                <a>Läs mer</a>
            </Link>
        </div>
    </div>
}

export default Post