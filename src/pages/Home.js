import Stack from 'react-bootstrap/Stack';

import GlobalNav from '../components/common/GlobalNav'
import List from './List'
import ListCard from './ListCard'

function Home(){
    return(
        <Stack gap={3}>
            <div className="p-2"><GlobalNav /></div>
            <div className="p-2"><List /></div>
            <div className="p-2">Third item</div>
        </Stack>
    )
}

export default Home