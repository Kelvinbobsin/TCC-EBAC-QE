const Joi = require('joi')
const joi = require('joi')

const couponsShema = Joi.array().items({
    id: joi.number(),
    code: joi.string(),
    amount: joi.string(),
    date_created: joi.date(),
    date_created_gmt: joi.date(),
    date_modified: joi.date(),
    date_modified_gmt: joi.string(),
    date_expires: joi.string().allow(null),
    date_expires_gmt: joi.string().allow(null),
    usage_limit: joi.string().allow(null),
    usage_limit_per_user: joi.string().allow(null),
    limit_usage_to_x_items: joi.string().allow(null),
    discount_type: joi.string(),
    description: joi.string(),
    usage_count: joi.number(),
    individual_use: joi.boolean(),
    product_ids: joi.array(),
    excluded_product_ids: joi.array(),
    free_shipping: joi.boolean(),
    product_categories: joi.array(),
    excluded_product_categories: joi.array(),
    exclude_sale_items: joi.boolean(),
    minimum_amount: joi.string(),
    maximum_amount: joi.string(),
    email_restrictions: joi.array(),
    used_by: joi.array(),
    meta_data: joi.array(),
    _links: joi.object()
})

export default couponsShema;