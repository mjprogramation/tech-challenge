<?php

namespace App\Repositories;

use App\Contracts\UploaderRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploaderRepository implements UploaderRepositoryInterface {

    /**
     * Validate image request
     *
     * @param Request $request
     * @return void
     */
    public static function validateImage (Request $request)
    {
        $request->validate([
            "image" => "required|image|mimes:jpg,png,jpeg"
        ]);
    }


    /**
     * store images withen custom path
     *
     * @param Request $request
     * @param string $path
     * @return void
     */
    public function store(Request $request, string $path = "images")
    {
        $path = $request->file('image')->store($path, "public");

        return asset(Storage::url($path));

    }   


}