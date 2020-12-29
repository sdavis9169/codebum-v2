import React, { Component } from 'react'

import MenuItem from '../menu-item/menu-item'

import './directory.styles.scss'

class Directory extends Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                  title: 'Code',
                //   imageUrl: 'https://www.google.https://www.burning-glass.com/wp-content/uploads/coding_screen_400x300-e1535048737568.jpgcom/imgres?imgurl=https%3A%2F%2Fmakeawebsitehub.com%2Fwp-content%2Fuploads%2F2016%2F02%2Flearn-code-e1455713167295.jpg&imgrefurl=https%3A%2F%2Fmakeawebsitehub.com%2Flearn-to-code-for-free%2F&tbnid=ThjDwNE4k7nOWM&vet=12ahUKEwjU59Gh4fHtAhXFnZ4KHVflA4cQMygNegUIARDpAQ..i&docid=yKXh8BPlrvSVRM&https://makeawebsitehub.com/wp-content/uploads/2016/02/learn-code-e1455713167295.jpgw=1200&h=800&q=free%20code%20pics&ved=2ahUKEwjU59Gh4fHtAhXFnZ4KHVflA4cQMygNegUIARDpAQ',
                  id: 1,
                  subtitle: 'View Code'
                },
                {
                  title: 'Sports',
                  imageUrl: '/Users/sdavis/Documents/Code/codebum-v2/src/pexels-pixabay-264300.png',
                  id: 2,
                  subtitle: 'View Sports'
                },
                {
                  title: 'Fitness',
                //   imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  subtitle: 'View Fitness'
                },
                {
                  title: 'Personal Growth',
                //   imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  id: 4,
                  subtitle: 'View Personal Growth',

                },
                {
                    title: 'About Me',
                //   imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  id: 5,
                  subtitle: 'View About Me'
                }
              ]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, subtitle}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} subtitle={subtitle} />
                    ))
                }
            </div>
        )
    }
}

export default Directory
