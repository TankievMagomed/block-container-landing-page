import React from "react";
import $ from "./SolutionCatalog.module.css";
import { SOLUTION_CATALOG_DATA } from "constants";
import { SolutionCatalogCard } from "components/SolutionCatalogCard";

export const SolutionCatalog = () => {
  return (
    <div className={$.solutionCatalog__section}>
      <h1 className={$.solutionCatalog__headerText}>Каталог типовых решений</h1>
      <span className={$.solutionCatalog__subHeaderText}>
        Большой выбор блок-контейнеров по функционалу, размерам,
        <br />
        компоновке, материалу и планировке
      </span>
      <div className={$.solutionCatalog__photoProjects}>
        {SOLUTION_CATALOG_DATA.map(({ title, photos }, index) => {
          return (
            <SolutionCatalogCard
              title={title}
              photos={photos}
              key={title}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};
