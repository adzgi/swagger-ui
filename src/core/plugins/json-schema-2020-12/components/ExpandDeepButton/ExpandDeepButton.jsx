/**
 * @prettier
 */
import React, { useCallback } from "react"
import PropTypes from "prop-types"

const ExpandDeepButton = ({ expanded, onClick }) => {
  const handleExpansion = useCallback(
    (event) => {
      onClick(event, !expanded)
    },
    [expanded, onClick]
  )

  return (
    <button
      type="button"
      className="json-schema-2020-12-expand-deep-button"
      onClick={handleExpansion}
    >
      {expanded ? "Colapsar todo" : "Expandir todo"}
    </button>
  )
}

ExpandDeepButton.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ExpandDeepButton
