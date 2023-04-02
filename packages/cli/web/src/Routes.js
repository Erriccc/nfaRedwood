// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import BlogLayout from 'src/layouts/BlogLayout'
const Routes = () => {
  return (
    <Router>

      <Set wrap={ScaffoldLayout} title="Nfts" titleTo="nfts" buttonLabel="New Nft" buttonTo="newNft">

        <Route path="/nfts/new" page={NftNewNftPage} name="newNft" />

        <Route path="/nfts/{id:Int}/edit" page={NftEditNftPage} name="editNft" />

        <Route path="/nfts/{id:Int}" page={NftNftPage} name="nft" />

        <Route path="/nfts" page={NftNftsPage} name="nfts" />

      </Set>

      {/* <Set wrap={ScaffoldLayout} title="TestModels" titleTo="testModels" buttonLabel="New TestModel" buttonTo="newTestModel">

        <Route path="/test-models/new" page={TestModelNewTestModelPage} name="newTestModel" />

        <Route path="/test-models/{id:Int}/edit" page={TestModelEditTestModelPage} name="editTestModel" />

        <Route path="/test-models/{id:Int}" page={TestModelTestModelPage} name="testModel" />

        <Route path="/test-models" page={TestModelTestModelsPage} name="testModels" />

      </Set> */}

      <Set wrap={BlogLayout} >
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/K" page={HomePage} name="home" />

      <Set wrap={ScaffoldLayout} title="Books" titleTo="books" buttonLabel="New Book" buttonTo="newBook">
        <Route path="/books/new" page={BookNewBookPage} name="newBook" />
        <Route path="/books/{id:Int}/edit" page={BookEditBookPage} name="editBook" />
        <Route path="/books/{id:Int}" page={BookBookPage} name="book" />
        <Route path="/books" page={BookBooksPage} name="books" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
