import usePageTitle from "../../core/hooks/usePageTitle"
import PostList from "../features/PostsList"
import UserPerformance from "../features/UserPerformance"
import DefaultLayout from "../layouts/Default"
import UserTopTags from '../features/UserTopTags';
import UserEarnings from "../features/UserEarnings";

export default function Home () {
  usePageTitle('Home')

  return <DefaultLayout>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 32}}>
      <UserTopTags />
      <UserEarnings />
    </div>
    <UserPerformance />
    <PostList />
  </DefaultLayout>
}