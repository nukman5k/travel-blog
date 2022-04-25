
const getPosition = (position) => {
    if (navigator.geolocation) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }

}

export default {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    initialValue: async () => ({
        postedAt: await getPosition()
            .then(({ coords })=> {
    return {
        const { latitude, longitude, altitude } = coords;
    }
})
    })

fields: [
    {
        name: 'postedAt',
        title: 'Location',
        type: 'geopoint',
    },
    {
        name: 'title',
        title: 'Title',
        type: 'string',
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 96,
        },
    },
    {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'author' }],
    },
    {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
            hotspot: true,
        },
    },
    {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
    {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
    },
    {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
    }
]
};
