<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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


    
    /**
     * Get product related categories
     *
     * @return BelongsToMany
     */
    public function categories (): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }
}
