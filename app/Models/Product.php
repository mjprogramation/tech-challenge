<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;


    /**
     * Model no need to be timestamped 
     *
     * @var boolean
     */
    public $timestamps = false;

    /**
     * Mass assigned fields / variables
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'price',
        'image'
    ];

    /**
     * Cast price to float format
     *
     * @var array
     */
    protected $casts = [
        'price' => 'float'
    ];
}
