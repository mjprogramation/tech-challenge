<?php

namespace App\Http\Controllers;

use App\Contracts\UploaderRepositoryInterface;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    
    private UploaderRepositoryInterface $uploaderRepository;

    public function __construct(UploaderRepositoryInterface $uploaderRepositoryInterface)
    {
        $this->uploaderRepository = new $uploaderRepositoryInterface;
    }


    public function productImage (Request $request)
    {
        $this->uploaderRepository::validateImage($request);

        return $this->uploaderRepository->store($request, 'products');
    }
}
