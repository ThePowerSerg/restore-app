using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;

namespace API.Controllers
{
    [Route("api/[controller]")] // https://localhost:5001/api/products
    [ApiController]
    public class ProductsController (StoreContext context): ControllerBase
    {
        [HttpGet]
        public ActionResult<List<Product>> GetProducts()
        {
            return context.Products.ToList();
        }  

        [HttpGet("{id}")]
        public ActionResult<Product> GetProducts(int id)
        {
            var product = context.Products.Find(id);

            if (product == null) return NotFound();

            return product;
        }  
    }
}