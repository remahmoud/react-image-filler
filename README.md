

# React Image Filler

![react-image-filler](./preview.png)

React Image Filler is a handy React component that allows you to generate placeholder images with customizable properties such as width, height, text, color, and background color. This is particularly useful in scenarios where you need to reserve space for images that are yet to load or are optional.

Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [API](#api)
4. [Contributing](#contributing)

## Installation

```bash
npm install react-image-filler --save
# or
yarn add react-image-filler
```

## Usage

```jsx
import ImageFiller from 'react-image-filler';

const App = () => {
    return (
        <div>
            <ImageFiller width={200} height={200} />
        </div>
    );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | number | 100 | Width of the image |
| `height` | number | 100 | Height of the image |
| `text` | string | Placeholder | text of the image |
| `color` | string | #6a6a6a | text color of the image |
| `background` | string | #dddddd | background color of the image |

## Contributing

Contributing to open-source projects like react-image-filler can be a rewarding experience. You not only get to improve your coding skills but also contribute to the broader developer community.

If you are interested in contributing to this project, whether it be through improvements, bug fixes, or new features, here are the steps you need to follow:

### step to contribute:

1. **Fork the project & clone locally:** Start by forking the project to your GitHub account, which creates your own copy of the repository. Then clone this fork to your local machine to start working on it.
2. **Create a feature branch:** Instead of working directly on the main branch, it's best practice to create a new branch for each feature or fix you're working on. This can be done with the command: `git checkout -b feature/AmazingFeature`.
3. **Commit your changes:** After making your changes, commit them with a clear and concise message describing what you've done. This can be done with the command: `git commit -m 'Add some AmazingFeature'`.
4. **Push your changes to GitHub:** Once your changes are committed, push them to the branch on your forked repository on GitHub. This can be done with the command: `git push origin feature/AmazingFeature`.
5. **Open a pull request:** Finally, navigate to your forked repository on GitHub and click on the 'Pull request' button. Fill in the necessary details and submit it. This notifies the maintainers of the project about your contribution and they will review your changes.
6. Enjoy 😃

## Author

- [Mahmoud Ibrahiam](https://www.linkedin.com/in/mahmoud-ibrahiam) - **Frontend Developer**

### If you like this package, please leave a star.


