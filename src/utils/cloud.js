import { v2 as cloudinary } from 'cloudinary';

import dotenv from 'dotenv'
dotenv.config()

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dvgt1ldcu', 
        api_key: '947694981318815', 
        api_secret: 'qv6LkXzfBo2YJjYiffw9W5JufLY' 
    });


export default cloudinary

