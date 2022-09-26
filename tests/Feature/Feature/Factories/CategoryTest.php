<?php

namespace Tests\Feature\Feature\Factories;

use App\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CategoryTest extends TestCase
{


    /**
     * @test
     */
    public function testMakeCategory()
    {
        $category = Category::factory()->make();

        $this->assertInstanceOf(Category::class, $category);
    }

    
}
