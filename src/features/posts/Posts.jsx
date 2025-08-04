import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from './postsSlice';

export default function Posts() {
  const dispatch = useDispatch();
  const {data, status, error} = useSelector(state => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === 'loading') return <p>Загрузка...</p>;
  if (status === 'failed') return <p>Ошибка: {error}</p>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id} style={{
          listStyle: 'none', display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          borderBottom: "1px dashed darkred",
        }}>
          <div style={{display: 'flex', alignItems: 'center', gap: "10px"}}>
            <span>{post.id}</span>
            <h3>{post.title}</h3>
          </div>
          <p style={{textAlign: "left"}}>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}