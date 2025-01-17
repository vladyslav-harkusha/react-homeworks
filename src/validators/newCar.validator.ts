import Joi from "joi";

export const newCarValidator = Joi.object({
    brand: Joi.string().max(20).pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        'string.pattern.base': ' only alphabetic characters allowed',
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': ' price cannot be negative',
        'number.max': ' price cannot be more than 1000000',
    }),
    year: Joi.number().min(1990).max(2024).required().messages({
        'number.min': ' year cannot less than 1990',
        'number.max': ' year cannot be more than 2024',
    }),
});
