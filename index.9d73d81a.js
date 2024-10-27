document.querySelectorAll("form").forEach(function(e){e.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.className="field-label",t.htmlFor=e.id,t.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),e.placeholder=t.textContent,e.closest(".field").insertBefore(t,e)})});
//# sourceMappingURL=index.9d73d81a.js.map
