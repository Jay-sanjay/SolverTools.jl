var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Contents","page":"Reference","title":"Contents","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Index","page":"Reference","title":"Index","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [SolverTools]","category":"page"},{"location":"reference/#SolverTools.AbstractTrustRegion","page":"Reference","title":"SolverTools.AbstractTrustRegion","text":"AbstractTrustRegion\n\nAn abstract trust region type so that specific trust regions define update rules differently. Child types must have at least the following real fields:\n\nacceptance_threshold\ninitial_radius\nradius\nratio\n\nand the following function:\n\nupdate!(tr, step_norm)\n\n\n\n\n\n","category":"type"},{"location":"reference/#SolverTools.LineModel","page":"Reference","title":"SolverTools.LineModel","text":"A type to represent the restriction of a function to a direction. Given f : R → Rⁿ, x ∈ Rⁿ and a nonzero direction d ∈ Rⁿ,\n\nϕ = LineModel(nlp, x, d)\n\nrepresents the function ϕ : R → R defined by\n\nϕ(t) := f(x + td).\n\n\n\n\n\n","category":"type"},{"location":"reference/#SolverTools.TRONTrustRegion","page":"Reference","title":"SolverTools.TRONTrustRegion","text":"TRONTrustRegion{T, V} <: AbstractTrustRegion{T, V}\n\nTrust region used by TRON that contains the following fields:\n\ninitial_radius::T: initial radius;\nradius::T: current radius;\nmax_radius::T: upper bound on the radius (default 1 / sqrt(eps(T)));\nacceptance_threshold::T: decrease radius if ratio is below this threshold between 0 and 1 (default 1e-4);\ndecrease_threshold::T: ...between 0 and 1  (default 0.25);\nincrease_threshold::T: increase radius if ratio is beyond this threshold between 0 and 1  (default 0.75);\nlarge_decrease_factor::T: decrease factor between 0 and 1  (default 0.25);\nsmall_decrease_factor::T: decrease factor between 0 and 1  (default 0.5);\nincrease_factor::T: increase factor greater than one (default 4);\nratio::T: current ratio ared / pred;\nquad_min::T: ...;\ngt::V: pre-allocated memory vector to store the gradient of the objective function;\ngood_grad::Bool: true if gt is the gradient of the objective function at the trial point.\n\nThe following constructors are available:\n\nTRONTrustRegion(gt,::V initial_radius::T; kwargs...)\n\nIf gt is not known, it is possible to use the following constructors:\n\nTRONTrustRegion(::Type{V}, n::Int, Δ₀::T; kwargs...)\nTRONTrustRegion(n::Int, Δ₀::T; kwargs...)\n\nthat will allocate a vector of size n and type V or Vector{T}.\n\n\n\n\n\n","category":"type"},{"location":"reference/#SolverTools.TrustRegion","page":"Reference","title":"SolverTools.TrustRegion","text":"TrustRegion{T, V} <: AbstractTrustRegion{T, V}\n\nBasic trust region type that contains the following fields:\n\ninitial_radius::T: initial radius;\nradius::T: current radius;\nmax_radius::T: upper bound on the radius (default 1 / sqrt(eps(T)));\nacceptance_threshold::T: decrease radius if ratio is below this threshold between 0 and 1 (default 1e-4);\nincrease_threshold::T: increase radius if ratio is beyond this threshold between 0 and 1  (default 0.95);\ndecrease_factor::T: decrease factor less between 0 and 1 (default 1 / 3);\nincrease_factor::T: increase factor greater than one (default 3 / 2);\nratio::T: current ratio ared / pred;\ngt::V: pre-allocated memory vector to store the gradient of the objective function;\ngood_grad::Bool: true if gt is the gradient of the objective function at the trial point.\n\nThe following constructors are available:\n\nTrustRegion(gt,::V initial_radius::T; kwargs...)\n\nIf gt is not known, it is possible to use the following constructors:\n\nTrustRegion(::Type{V}, n::Int, Δ₀::T; kwargs...)\nTrustRegion(n::Int, Δ₀::T; kwargs...)\n\nthat will allocate a vector of size n and type V or Vector{T}.\n\n\n\n\n\n","category":"type"},{"location":"reference/#SolverTools.TrustRegionException","page":"Reference","title":"SolverTools.TrustRegionException","text":"Exception type raised in case of error.\n\n\n\n\n\n","category":"type"},{"location":"reference/#LinearOperators.reset!-Tuple{SolverTools.AbstractTrustRegion}","page":"Reference","title":"LinearOperators.reset!","text":"reset!(tr)\n\nReset the trust-region radius to its initial value.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.grad!-Tuple{LineModel, AbstractFloat, AbstractVector}","page":"Reference","title":"NLPModels.grad!","text":"grad!(f, t, g) evaluates the first derivative of the LineModel\n\nϕ(t) := f(x + td),\n\ni.e.,\n\nϕ'(t) = ∇f(x + td)ᵀd.\n\nThe gradient ∇f(x + td) is stored in g.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.grad-Tuple{LineModel, AbstractFloat}","page":"Reference","title":"NLPModels.grad","text":"grad(f, t) evaluates the first derivative of the LineModel\n\nϕ(t) := f(x + td),\n\ni.e.,\n\nϕ'(t) = ∇f(x + td)ᵀd.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.hess-Tuple{LineModel, AbstractFloat}","page":"Reference","title":"NLPModels.hess","text":"Evaluate the second derivative of the LineModel\n\nϕ(t) := f(x + td),\n\ni.e.,\n\nϕ\"(t) = dᵀ∇²f(x + td)d.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.obj-Tuple{LineModel, AbstractFloat}","page":"Reference","title":"NLPModels.obj","text":"obj(f, t) evaluates the objective of the LineModel\n\nϕ(t) := f(x + td).\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.objgrad!-Tuple{LineModel, AbstractFloat, AbstractVector}","page":"Reference","title":"NLPModels.objgrad!","text":"objgrad!(f, t, g) evaluates the objective and first derivative of the LineModel\n\nϕ(t) := f(x + td),\n\nand\n\nϕ'(t) = ∇f(x + td)ᵀd.\n\nThe gradient ∇f(x + td) is stored in g.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NLPModels.objgrad-Tuple{LineModel, AbstractFloat}","page":"Reference","title":"NLPModels.objgrad","text":"objgrad(f, t) evaluates the objective and first derivative of the LineModel\n\nϕ(t) := f(x + td),\n\nand\n\nϕ'(t) = ∇f(x + td)ᵀd.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SolverTools.acceptable-Tuple{SolverTools.AbstractTrustRegion}","page":"Reference","title":"SolverTools.acceptable","text":"acceptable(tr)\n\nReturn true if a step is acceptable, i.e. large or equal to tr.acceptance_threshold.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SolverTools.active!-Union{Tuple{T}, Tuple{BitVector, AbstractVector{T}, AbstractVector{T}, AbstractVector{T}}} where T<:Real","page":"Reference","title":"SolverTools.active!","text":"active!(indices, x, ℓ, u; rtol = 1e-8, atol = 1e-8)\n\nUpdate a BitVector of the active bounds at x, using tolerance min(rtol * (uᵢ-ℓᵢ), atol). If ℓᵢ or uᵢ is not finite, only atol is used.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SolverTools.active-Union{Tuple{T}, Tuple{AbstractVector{T}, AbstractVector{T}, AbstractVector{T}}} where T<:Real","page":"Reference","title":"SolverTools.active","text":"active(x, ℓ, u; rtol = 1e-8, atol = 1e-8)\n\nComputes the active bounds at x, using tolerance min(rtol * (uᵢ-ℓᵢ), atol). If ℓᵢ or uᵢ is not finite, only atol is used.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SolverTools.aredpred!-Union{Tuple{V}, Tuple{T}, Tuple{SolverTools.AbstractTrustRegion{T, V}, NLPModels.AbstractNLPModel{T, V}, T, T, T, V, V, T}} where {T, V}","page":"Reference","title":"SolverTools.aredpred!","text":"ared, pred = aredpred(tr, nlp, f, f_trial, Δm, x_trial, step, slope)\nared, pred = aredpred(tr, nls, Fx, f, f_trial, Δm, x_trial, step, slope)\n\nCompute the actual and predicted reductions ∆f and Δm, where ared = Δf = f_trial - f is the actual reduction is an objective/merit/penalty function, pred = Δm = m_trial - m is the reduction predicted by the model m of f. We assume that m is being minimized, and therefore that Δm < 0.\n\nIf tr.good_grad is true, then the gradient of nlp at x_trial is stored in tr.gt. For AbstractNLSModel, the argument Fx stores the residual if the gradient is updated.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SolverTools.aredpred_common-Union{Tuple{V}, Tuple{T}, Tuple{NLPModels.AbstractNLPModel{T, V}, T, T, T, V, V, V, T}} where {T, V}","page":"Reference","title":"SolverTools.aredpred_common","text":"ared, pred, good_grad = aredpred_common(nlp, f, f_trial, Δm, x_trial, step, g_trial, slope)\nared, pred, good_grad = aredpred_common(nlp, Fx, f, f_trial, Δm, x_trial, step, g_trial, slope)\n\nCompute the actual and predicted reductions ∆f and Δm, where ared = Δf = f_trial - f is the actual reduction is an objective/merit/penalty function, pred = Δm = m_trial - m is the reduction predicted by the model m of f. We assume that m is being minimized, and therefore that Δm < 0.\n\ngood_grad is true if the gradient of nlp at x_trial has been updated and stored in g_trial. For AbstractNLSModel, the argument Fx stores the residual if the gradient is updated.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SolverTools.armijo_wolfe-Union{Tuple{T}, Tuple{LineModel, T, T, Vector{T}}} where T<:AbstractFloat","page":"Reference","title":"SolverTools.armijo_wolfe","text":"t, good_grad, ht, nbk, nbW = armijo_wolfe(h, h₀, slope, g)\n\nPerforms a line search from x along the direction d as defined by the LineModel h(t) = f(x + t d), where h₀ = h(0) = f(x), slope = h'(0) = ∇f(x)ᵀd and g is a vector that will be overwritten with the gradient at various points. On exit, if good_grad=true, g contains the gradient at the final step length. The steplength is chosen trying to satisfy the Armijo and Wolfe conditions. The Armijo condition is\n\nh(t)  h₀ + τ₀ t h(0)\n\nand the Wolfe condition is\n\nh(t)  τ₁ h(0)\n\nInitially the step is increased trying to satisfy the Wolfe condition. Afterwards, only backtracking is performed in order to try to satisfy the Armijo condition. The final steplength may only satisfy Armijo's condition.\n\nThe output is the following:\n\nt: the step length;\ngood_grad: whether g is the gradient at x + t * d;\nht: the model value at t, i.e., f(x + t * d);\nnbk: the number of times the steplength was decreased to satisfy the Armijo condition, i.e., number of backtracks;\nnbW: the number of times the steplength was increased to satisfy the Wolfe condition.\n\nThe following keyword arguments can be provided:\n\nt: starting steplength (default 1);\nτ₀: slope factor in the Armijo condition (default max(1e-4, √ϵₘ));\nτ₁: slope factor in the Wolfe condition. It should satisfy τ₁ > τ₀ (default 0.9999);\nbk_max: maximum number of backtracks (default 10);\nbW_max: maximum number of increases (default 5);\nverbose: whether to print information (default false).\n\n\n\n\n\n","category":"method"},{"location":"reference/#SolverTools.breakpoints-Union{Tuple{T}, NTuple{4, AbstractVector{T}}} where T<:Real","page":"Reference","title":"SolverTools.breakpoints","text":"nbrk, brkmin, brkmax = breakpoints(x, d, ℓ, u)\n\nFind the smallest and largest values of α such that x + αd lies on the boundary. x is assumed to be feasible. nbrk is the number of breakpoints from x in the direction d.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SolverTools.compute_Hs_slope_qs!-Union{Tuple{T}, Tuple{AbstractVector{T}, Union{LinearOperators.AbstractLinearOperator, AbstractMatrix}, AbstractVector{T}, AbstractVector{T}}} where T<:Real","page":"Reference","title":"SolverTools.compute_Hs_slope_qs!","text":"slope, qs = compute_Hs_slope_qs!(Hs, H, s, g)\n\nComputes\n\nHs = H * s\nslope = dot(g,s)\nqs = ¹/₂sᵀHs + slope\n\n\n\n\n\n","category":"method"},{"location":"reference/#SolverTools.hess!-Tuple{LineModel, AbstractFloat, AbstractVector}","page":"Reference","title":"SolverTools.hess!","text":"Evaluate the second derivative of the LineModel\n\nϕ(t) := f(x + td),\n\ni.e.,\n\nϕ\"(t) = dᵀ∇²f(x + td)d.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SolverTools.project!-Union{Tuple{T}, NTuple{4, AbstractVector{T}}} where T<:Real","page":"Reference","title":"SolverTools.project!","text":"project!(y, x, ℓ, u)\n\nProjects x into bounds ℓ and u, in the sense of yᵢ = max(ℓᵢ, min(xᵢ, uᵢ)).\n\n\n\n\n\n","category":"method"},{"location":"reference/#SolverTools.project_step!-Union{Tuple{T}, NTuple{5, AbstractVector{T}}, Tuple{AbstractVector{T}, AbstractVector{T}, AbstractVector{T}, AbstractVector{T}, AbstractVector{T}, Real}} where T<:Real","page":"Reference","title":"SolverTools.project_step!","text":"project_step!(y, x, d, ℓ, u, α = 1.0)\n\nComputes the projected direction y = P(x + α * d) - x.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SolverTools.redirect!-Tuple{LineModel, AbstractVector, AbstractVector}","page":"Reference","title":"SolverTools.redirect!","text":"redirect!(ϕ, x, d)\n\nChange the values of x and d of the LineModel ϕ, but retains the counters.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SolverTools.update!","page":"Reference","title":"SolverTools.update!","text":"update!(tr, step_norm)\n\nUpdate the trust-region radius based on the ratio tr.ratio of actual vs. predicted reduction and the step norm.\n\n\n\n\n\n","category":"function"},{"location":"#Home","page":"Home","title":"SolverTools.jl documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package provides tools for developing nonlinear optimization solvers.","category":"page"}]
}
