<?php

namespace Tests\Feature\Feature\Databases;

use App\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CategoryDatabaseTest extends TestCase
{

    //use RefreshDatabase;
    /**
     *
     * @test
     */
    public function testCreateCategory()
    {
        $category = Category::factory()->create();

        $this->assertDatabaseHas('categories', $category->toArray());
    }

    /**
     * 
     *
     * @test
     */
    public function testCreateCategoryWithParent ()
    {
        $parentCategory = Category::factory()->create();
        
        $category = Category::factory()->for($parentCategory)->create();
        
        $this->assertEquals($parentCategory->id, $category->category->id);
    }
}
