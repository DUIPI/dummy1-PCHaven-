<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AdminCpuResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
          'id'=>$this->id,
          'cpu_name'=>$this->cpu_name,
          'cpu_socket'=>$this->cpu_socket
        ];
    }
}
