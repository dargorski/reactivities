using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        private IMediator mediator;
        protected IMediator Mediator => mediator ?? (this.mediator = HttpContext.RequestServices.GetService<IMediator>());

        //public BaseController(IMediator mediator)
        //{
        //    this.mediator = mediator;
        //}
    }
}
