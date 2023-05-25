# React Image Filler

react-image-filler is a React component that return placeholder image with given width and height.

## Installation

```bash

npm install react-image-filler --save

```

### or

```bash

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

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | number | 100 | Width of the image |
| `height` | number | 100 | Height of the image |
| `text` | string | Placeholder | text of the image |
| `color` | string | #6a6a6a | text color of the image |
| `background` | string | #dddddd | background color of the image |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### step to contribute:

1. Fork the project & clone locally.
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a pull request
6. Enjoy 😃

## Author

- [Mahmoud Ibrahiam](https://www.linkedin.com/in/mahmoud-ibrahiam) - **Frontend Developer**

### If you like this package, please leave a star.


