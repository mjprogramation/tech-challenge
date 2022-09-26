<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Category extends Model
{
    use HasFactory;

    /**
     * Model no need to be time stamped
     *
     * @var boolean
     */
    public $timestamps = false;

    /**
     * Mass fillable fileds
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'category_id'
    ];

    /**
     * Get parent category if exists
     *
     * @return BelongsTo
     */
    public function parent (): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }


}
