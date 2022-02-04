# Notes and Ideas

I was working on this project for 2-4hours after work. This is my project progress notes.

Challenges: 
  - I feel I spent way to much time on trying figure out css things, such as font-family, paddings, etc. It was quite hard and I don't feel that my solution is pixel perfect. But I did my best to use extarnal tools and experience to get there we are.

# Day 1 (Monday)
- Researching new gen building tools [esbuild](https://esbuild.github.io/), [Vite](https://vitejs.dev/), [Snowpack](https://www.snowpack.dev/)
- Setting up vite and dev tools, eslint, postcss, etc
- Adding infinit loader
# Day 2 (Tuesday)
- Implementing favorited 
- adding styles
- Starting working on image lazy loading
  - Rewriting `useIntersectionHook` to fit image lazy load better
# Day 3 (Wednesday)
- Ended working on lazy load images
  - Added low quality image to show while loading real image
  - Adding blur animation
- Setting up cypress
- Setting up jest
  - Vite does not support jest first class yeat. https://github.com/vitejs/vite/issues/1955
    - With help of https://www.npmjs.com/package/vite-plugin-babel-macros and babel config jest runs. 
    - Images, css modules and all the dependencies break jest, because vite, jest, babel hard time togherher. Spend 1 hour debugging and droped. 
    - IMO I would not use Vite for production at this moment.
- Vite build works great, but breaks with vite preview.
- Running same build with http-server works as expected.

# Day 5 (Friday)
- Tried using https://docs.cypress.io/guides/component-testing/introduction#Experimental without luck
