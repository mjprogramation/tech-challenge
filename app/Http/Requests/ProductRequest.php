<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'string|required|max:255',
            'description' => 'string|required|max:255',
            'price' => 'numeric|max_digits:6',
            'image' => 'string|nullable|max:255',
            'category_id' => 'required|numeric|exists:categories,id'
        ];
    }
}
