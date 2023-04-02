import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return <>
   <header>
        <h1><code>myApp3 Blog</code></h1>
        <nav>
          <ul>
            <li>
           
                <Link to={routes.home()}>Home</Link>
                <Link to={routes.about()}>About</Link>
                <Link to={routes.books()}>Books ADMIN</Link>
                <Link to={routes.posts()}>POST ADMIN</Link>

        </li>
          </ul>
        </nav>
      </header>
      <main>
       {children}
       </main>


  
  </>
}

export default BlogLayout
