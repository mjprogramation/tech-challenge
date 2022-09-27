<?php

namespace App\Contracts;

use Illuminate\Http\Request;

interface UploaderRepositoryInterface {

    /**
     * Store file to given path
     *
     * @return void
     */
    public function store (Request $request,string $path);


    public static function validateImage (Request $request);



}