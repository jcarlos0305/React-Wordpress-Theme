import UserContext from './UserContext';
import {connect} from 'frontity';

const Categories = {
    EXPERIENCE: 2,
    EDUCATION: 3,
    SKILLS: 4,
    ABOUT: 5
}

const CreatePost = (data) => ({
  id: data.id,
  title: data.title.rendered,
  acf: data.acf,
  content: data.content,
  category: data.categories[0]
});

const UserProvider = ({ state, children }) => {
    const data = state.source.get(state.router.link);

    const posts = data.items.reduce((acc, cur) => {
        let index = 0;
        while(index < acc.lenth && state.source[cur.type][cur.id].categories[0] < state.source[acc[index].type][acc[index].id].categories[0]) index++;
        acc.splice(index, 0, CreatePost(state.source[cur.type][cur.id]));
        return acc;
    }, []);

    return(
        <UserContext.Provider
            value={{
                posts: posts,
                about: posts.find(post => post.category == Categories.ABOUT),
                experience: posts.filter(post => post.category == Categories.EXPERIENCE),
                education: posts.filter(post => post.category == Categories.EDUCATION),
                skills: posts.filter(post => post.category == Categories.SKILLS)
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default connect(UserProvider);
