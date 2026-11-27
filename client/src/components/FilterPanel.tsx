const FilterPanel = ({
  categories,
  category,
  minPrice,
  maxPrice,
  updateFilter,
  clearFilters,
  updateFilters,
  hasFilters,
}: any) => {
  const categoriesWithAll = [
    { slug: "", name: "Todas as categorias" },
    ...categories,
  ];

  return (
    <div className="space-y-6">
      {/* CATEGORIES */}
      <div className="ass">
        <h3 className="text-sm font-semibold text-app-text-green mb-3">
          Categorias
        </h3>
        <div className="space-y-1.5">
          {categoriesWithAll.map((cat: any) => (
            <button
              key={cat.slug}
              onClick={() => updateFilter("category", cat.slug)}
              className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-all ${category === cat.slug ? "bg-app-green text-white" : "text-app-text-light hover:bg-app-cream"}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
      {/* PRICE RANGE */}
      <div>
        <h3 className="text-smfont-semibold text-app-green mb-3">
          Limite de valor
        </h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => updateFilter("minPrice", e.target.value)}
            className="w-full px-3 py-2 text-sm bg-white rounded-lg border not-focus:border-app-border"
          />
          <span className="text-app-text-light">-</span>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => updateFilter("maxPrice", e.target.value)}
            className="w-full px-3 py-2 text-sm bg-white rounded-lg border not-focus:border-app-border"
          />
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="w-full py-2 text-sm text-app-error hover:bg-red-50 rounded-lg transition-colors font-medium"
        >
          Limpar todos os filtros
        </button>
      )}
    </div>
  );
};

export default FilterPanel;
