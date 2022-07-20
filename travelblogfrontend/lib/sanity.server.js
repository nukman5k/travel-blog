
import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config);

export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: 'sk6W63u50I9CwqbXyilK3NOdDalJx4YvN8x4pTYfn2F8AsDLu0axWXkWgZXA9Hic1obYIxlOfSDprlp0gEbF8QQQuX6NZUhjSqTLx1QlQxERNKhjS3f8Zyz8qOQCo5zWbcX5LtI2DyFBybvjLzLWkK8Hgs7ZWt80bhdgxKuCPgcd2yOSCwtqs'
})

export const getClient = (usePreview) => {
    return usePreview ? previewClient : sanityClient;
}
